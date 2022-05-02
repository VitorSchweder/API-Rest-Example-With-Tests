const UserService = require('../services/UserService');

class UsersController {
    async index(req, res) {
        try {   
            const result = await UserService.index();

            return res.json(result);
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            }); 
        }
    }

    async show(req,res) {
        try {
            const result = await UserService.getById(req.params.id);    
                
            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Usuário não encontrado!"
                });
            } 

            return res.json(result)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });  
        }           
    }

    async store(req,res) {
        try {            
            const result = await UserService.create(req.body);
            
            return res.json(result)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });  
        }   
    }

    async update(req,res) {
        try {
            const result = await UserService.update(req.body, req.params.id);
   
            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Usuário não encontrado!"
                });
            } 

            return res.json(result)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });  
        }           
    }
    
    async delete(req,res) {
        try {
            const result = await UserService.destroy(req.params.id);

            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Usuário não encontrado!"
                });
            } 

            return res.status(200).json({
                success: true, 
                message: "Usuário excluído com sucesso."
            });
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });
        }   
    }
}

module.exports = new UsersController;