export function validarCPF(cpf) {
    if (cpf.length !== 11)
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    else
        return { valido: true, texto: "" }
}

export function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72)
        return { valido: false, texto: "Senha deve ter mais de 4 digitos e menos de 72 digitos." }
    else
        return { valido: true, texto: "" }
}

export function validarNome(senha) {
    if (senha.length < 4 || senha.length > 72)
        return { valido: false, texto: "Nome deve ter mais de 4 digitos e menos de 72 digitos." }
    else
        return { valido: true, texto: "" }
}