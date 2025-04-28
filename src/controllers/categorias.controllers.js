import getConnection from "../db/database.js";

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id)
        res.json(result);
    } catch (error) {
        console.error("ERROR 500:")
    }
}

export const methodHTTP = {
    deleteCategoria
};