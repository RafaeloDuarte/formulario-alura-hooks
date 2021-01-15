import React, { useState, useContext } from "react"
import { TextField, Button } from "@material-ui/core"
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } })
    const validacoes = useContext(ValidacoesCadastro)

    function validarCampos(event){
        const {name, value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function sendOrNot(){
        for(let campo in erros){
            if(!erros[campo].valido)
                return false
        }
        return true
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if(sendOrNot())
                    aoEnviar()
            }}
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
                id="email"
                label="email"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur = {validarCampos}
                type='password'
                id="senha"
                name='senha'
                label="senha"
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario