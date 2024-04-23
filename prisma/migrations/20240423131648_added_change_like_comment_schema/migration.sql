/*
  Warnings:

  - Added the required column `comment_id` to the `LikeComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LikeComment" ADD COLUMN     "comment_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LikeComment" ADD CONSTRAINT "LikeComment_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
