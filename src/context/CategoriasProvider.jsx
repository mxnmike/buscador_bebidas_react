import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const CategoriasContext = createContext()

const CategoriasProvider = ({ children }) => {
  const [categoria, setCategorias] = useState([])

  const obtenerCategorias = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

      const { data } = await axios(url)
      setCategorias(data.drinks)
    } catch (error) {
      console.log('error:', error)
      setCategorias([])
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  return (
    <CategoriasContext.Provider value={{ categoria }}>
      {children}
    </CategoriasContext.Provider>
  )
}

export { CategoriasProvider }
export default CategoriasContext
