import multer from 'multer';
import path from 'path';

export default {
  // Fazendo com que o arquivo seja armazenado na pasta 'uploads'
  storage: multer.diskStorage({
    // Destinando o arquivo vindo da requisição para a pasta 'uploads'
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    // Requisição para obter o nome do arquivo,
    // File para manipula-lo,
    // Callback para executar
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};
