/*
  Warnings:

  - Added the required column `recoleccion_id` to the `notificaciones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notificaciones` ADD COLUMN `recoleccion_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `notificaciones` ADD CONSTRAINT `notificaciones_recoleccion_id_fkey` FOREIGN KEY (`recoleccion_id`) REFERENCES `recolecciones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
