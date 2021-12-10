import { Schema, model } from 'mongoose';

const HouseSchema = new Schema(
  {
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Isso não ficará registrado no banco, é só para ter acesso no retorno
// do sucesso do registro da casa, um link para ver a imagem
HouseSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

export default model('House', HouseSchema);
