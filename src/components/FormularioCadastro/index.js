import React, { useState, useEffect } from "react"
import DadosEntrega from "../DadosEntrega"
import DadosPessoais from "../DadosPessoais"
import DadosUsuario from "../DadosUsuario"
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {

  const [formStep, setFormStep] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (formStep === forms.length - 1)
      aoEnviar(dadosColetados)
  })

  const forms = [
    <DadosUsuario aoEnviar={dataCollect}/>,
    <DadosPessoais aoEnviar={dataCollect} />,
    <DadosEntrega aoEnviar={dataCollect} />,
    <Typography variant='h5'>Obrigado pelo cadastro</Typography>
  ]

  function nextStep() {
    setFormStep(formStep + 1)
  }

  function dataCollect(dados) {
    setDados({ ...dadosColetados, ...dados })
    nextStep()
  }

  return (
    <>
      <Stepper activeStep={formStep}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Usuário</StepLabel></Step>
        <Step><StepLabel>Dados de Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {forms[formStep]}
    </>
  )
}

export default FormularioCadastro