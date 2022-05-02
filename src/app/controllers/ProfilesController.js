const ProfileService = require('../services/ProfileService');

class ProfilesController {
    async index(req, res) {
        try {   
            const result = await ProfileService.index();

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
            const result = await ProfileService.getById(req.params.id);    
                
            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Perfil não encontrado!"
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
            const result = await ProfileService.create(req.body);
            
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
            const result = await ProfileService.update(req.body, req.params.id);
   
            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Perfil não encontrado!"
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
            const result = await ProfileService.destroy(req.params.id);

            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Perfil não encontrado!"
                });
            } 

            return res.status(200).json({
                success: true, 
                message: "Perfil excluído com sucesso."
            });
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });
        }   
    }
}

module.exports = new ProfilesController;