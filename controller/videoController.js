const Video = require('../models/video');

const createVideo = async (req, res) => {
    try {
        const { title, description, link } = req.body;
        await Video.create({
            title: title,
            description: description,
            link: link
        });

        console.log({ message: 'Cadastro de video realizado com sucesso!' });
        return res.json({ message: 'Cadastro de video realizado com sucesso!' });

    } catch (error) {
        console.log({ message: `Erro ao cadastrar: ${error}` });
        return res.status(404).json({ message: 'Ocorreu um erro ao cadastrar video!'} );
    };
}

const findVideo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const video = await Video.findOne({
            where: {
                id: id
            }
        });

        return res.json(video);

    } catch (error) {
        console.log({ message: `Erro ao buscar um: ${error}` });
        return res.status(404).json({ message: 'Ocorreu um erro ao buscar um usuário!' });
    };
}

const findVideos = async (req, res) => {
    try {
        const videos = await Video.findAll();
        res.json(videos);
    } catch (error) {
        console.log({ message: `Erro ao buscar todos: ${error}` });
        return res.status(404).json({ message: 'Ocorreu um erro ao buscar todos os videos!' });
    }
}

const updateVideo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description, link } = req.body;
        
        await Video.update({
            title: title,
            description: description,
            link: link
        },{
            where: {
                id: id
            }
        });

        res.json({ message: 'Video atualizado com sucesso!' });
        console.log({ message: 'Video atualizado com sucesso!' });
        
    } catch (error) {
        console.log({ message: `Erro ao atualizar: ${error}` });
        return res.status(404).json({ message: 'Ocorreu um erro ao atualizar o video!' });
        
    };
}

const deleteVideo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await Video.destroy({
            where: {
                id: id
            }
        });

        res.json({ message: 'Video apagado com sucesso!' });
        console.log({ message: 'Video apagado com sucesso!' });
        
    } catch (error) {
        console.log({ message: `Erro ao deletar: ${error}` });
        return res.status(404).json({ message: 'Ocorreu um erro ao deletar o video!' });
    };
}

module.exports = { createVideo, findVideo, findVideos, updateVideo, deleteVideo };