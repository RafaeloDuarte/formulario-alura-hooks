import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"

function DadosUsuario({ aoEnviar, validarCPF }) {
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
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
                id="senha"
                label="senha"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export default DadosUsuario