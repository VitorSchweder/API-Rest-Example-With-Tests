const Company = require('../models/Company');

class CompaniesController {
    async index(req, res) {
        try {       
            const company = await Company.findAll({
                include: [{ 
                    association: "employees", 
                }], 
                where: {
                    is_active: true
                },   
                order: [["name"]]
            });

            return res.json(company)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            }); 
        }
    }

    async store(req,res) {
        try {
            const company = await Company.create(req.body);
            
            return res.json(company)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });  
        }   
    }

    async update(req,res) {
        try {
            let company = await Company.findByPk(req.params.id);    
                
            if (!company) {
                return res.status(404).json({
                    success: false, 
                    message: "Empresa não encontrada!"
                });
            } 

            await Company.update(req.body, { where: { id: req.params.id } });

            company = await Company.findByPk(req.params.id);    

            return res.json(company)
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });  
        }           
    }
    
    async delete(req,res) {
        try {
            const result = await Company.destroy({ where: { id: req.params.id } });

            if (!result) {
                return res.status(404).json({
                    success: false, 
                    message: "Empresa não encontrada!"
                });
            } 

            return res.status(200).json({
                success: true, 
                message: "Empresa excluída com sucesso."
            });
        } catch (e) {
            return res.status(500).json({
                success: false, 
                message: e.toString()
            });
        }   
    }
}

module.exports = new CompaniesController;