import { Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand, ObjectCannedACL } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {

    private readonly s3: S3Client;
    private readonly bucketName = process.env.AWS_S3_BUCKET_NAME;

    constructor() {
        this.s3 = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }



    async singleUpload(file: Express.Multer.File): Promise<string> {
        try {
            console.log("Single Upload-------------->")
            const key = `${Date.now()}-${file.originalname}`;

            const uploadParams = {
                Bucket: this.bucketName,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype,
                ACL: 'public-read' as ObjectCannedACL
            };

            await this.s3.send(new PutObjectCommand(uploadParams));
            console.log("Uploads send to S3-------------->")
            return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
        
        } catch (error) {
            console.log("file upload Fail", error)

        }
    }

    async manyUpload(files: Express.Multer.File[]): Promise<Array<string>> {
        try {
            console.log("Many Uploads-------------->")
            const uploadPromises = files.map(async (file) => {
                const key = `${Date.now()}-${file.originalname}`;

                const uploadParams = {
                    Bucket: this.bucketName,
                    Key: key,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    ACL: 'public-read' as ObjectCannedACL,
                };

                await this.s3.send(new PutObjectCommand(uploadParams));
                console.log("Uploads send to S3-------------->")

                return `https://${this.bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`

            });

            return Promise.all(uploadPromises);
        } catch (error) {
            console.error('File upload failed', error);
            throw new Error('File upload failed');
        }
    }

}
