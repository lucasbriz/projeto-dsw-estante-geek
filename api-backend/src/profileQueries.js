const connection = require('./connection');

const createProfile = async (nome, nome_usuario, email, senha) => {
    const [query] = await connection.execute(`INSERT INTO estante_geek.perfil (nome, nome_usuario, email, senha) VALUES (?, ?, ?, ?)`, [nome, nome_usuario, email, senha]);
    return query;
}

module.exports = {createProfile};