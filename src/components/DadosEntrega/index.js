import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core"

export default function DadosEntrega() {

    const [cep, setCep] = useState(0)
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState(0)
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')

    return (
        <form>
            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
                id="cep"
                label="cep"
                variant="outlined"
                margin="normal"
                fullWidth
                type='number'
            />
            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value)
                }}
                id="endereco"
                label="endereco"
                variant="outlined"
                margin="normal"
                fullWidth
                type='text'
            />
            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value)
                }}
                id="numero"
                label="numero"
                variant="outlined"
                margin="normal"
                type='number'
            />
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value)
                }}
                id="estado"
                label="estado"
                variant="outlined"
                margin="normal"
                type='text'
            />
            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value)
                }}
                id="cidade"
                label="cidade"
                variant="outlined"
                margin="normal"
                fullWidth
                type='text'
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    )
}
