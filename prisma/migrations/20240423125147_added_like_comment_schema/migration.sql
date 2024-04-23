/*
  Warnings:

  - You are about to drop the column `like_count` on the `Like` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "likecomment_count" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "like_count";

-- CreateTable
CREATE TABLE "LikeComment" (
    "id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikeComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikeComment" ADD CONSTRAINT "LikeComment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
