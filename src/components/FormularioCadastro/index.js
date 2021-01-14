import React, { useState } from "react"
import DadosEntrega from "../DadosEntrega"
import DadosPessoais from "../DadosPessoais"
import DadosUsuario from "../DadosUsuario"

function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [formStep, setFormStep] = useState(0)
  const forms = [
    <DadosUsuario aoEnviar={nextStep} validarCPF={validarCPF}/>,
    <DadosPessoais aoEnviar={nextStep} />,
    <DadosEntrega aoEnviar={aoEnviar} />
  ]

  function nextStep() {
    setFormStep(formStep + 1)
  }

  function getFormStep(step) {
    switch (step) {
      case 0:
        return (<DadosUsuario aoEnviar={nextStep} validarCPF={validarCPF}/>)
      case 1:
        return (<DadosPessoais aoEnviar={nextStep} />)
      case 2:
        return (<DadosEntrega aoEnviar={aoEnviar} />)
      default:
        return
    }
  }

  return (
    <>
      {forms[formStep]}
    </>
  )
}

export default FormularioCadastro