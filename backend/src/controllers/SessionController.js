
//Metodos: index, show, update, store, destroy
import User from '../models/User';

class SessionController{
    async store(req, res){
        const { email } = req.body;

        //Procura o email recebido na requisição
        let user = await User.findOne({ email });

        //Se não estiver no banco então entre
        if(!user){
            //Registra o novo usuario no banco
            user = await User.create({ email });
        }

        return res.json(user)
    }
}

export default new SessionController();