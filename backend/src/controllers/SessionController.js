
//Metodos: index, show, update, store, destroy
class SessionController{
    store(req, res){
        return res.json({ message: 'Minha Api!'})
    }
}

export default new SessionController();