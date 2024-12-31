import { Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Get()
  testingUpload() {
    return {
      messgae: "testing upload"
    }
  }



  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 100 * 1024 * 1024 }, // Max file size of 5MB
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log("in controller")
    if (!file) {
      throw new HttpException('File is required', HttpStatus.BAD_REQUEST);
    }

    try {
      console.log({file})
      // Call the uploadFile method from S3 service
      const payload = await this.uploadService.singleUpload(file);
      console.log({payload})

      // Return the response with the file URL and name
      return {
        message: 'File uploaded successfully',
        fileName: payload.fileName,
        fileUrl: payload.fileUrl,
      };
    } catch (error) {
      // Handle errors (e.g., network or permission issues)
      throw new HttpException('Error uploading file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('multiple')
    @UseInterceptors(FilesInterceptor('files', 10)) // Allow up to 10 files
    async uploadMultipleFiles(@UploadedFiles() files: Express.Multer.File[]) {
        const result = await this.uploadService.manyUpload(files);
        return {
            message: 'Files uploaded successfully!',
            files: result,
        };
    }
}
}
