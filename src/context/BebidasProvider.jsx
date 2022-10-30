import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([])

  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [receta, setReceta] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return

      try {
        setCargando(true)
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data } = await axios(url)
        setReceta(data.drinks[0])
      } catch (error) {
        console.log(error)
      } finally {
        setCargando(false)
      }
    }
    obtenerReceta()
  }, [bebidaId])

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleBebidaIdClick = id => {
    console.log('id', id)
    setBebidaId(id)
  }
  const consultarBebida = async datos => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data } = await axios(url)
      setBebidas(data.drinks)
    } catch (error) {
      console.log(error)
      setBebidas([])
    }
  }

  return (
    <BebidasContext.Provider
      value={{
        consultarBebida,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        cargando,
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export { BebidasProvider }
export default BebidasContext
