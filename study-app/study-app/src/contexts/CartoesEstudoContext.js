import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";


const CartoesEtudoContext = createContext()

export const CartoesEstudoProvider = ({ children }) => {

    const [cartoes, setCartoes] = useState([])

    useEffect (() => {
        carregarCartoes()
    }, [])

    const carregarCartoes = async () => {
        const cartoesArmazenados = await AsyncStorage.getItem('cartoes')
        if (cartoesArmazenados) setCartoes(JSON.parse(cartoesArmazenados))
    }

    const adicionarCartao = async (cartao) => {
        const novosCartoes = [...cartoes, {...cartao, id: Date.now() }]
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes))
    }

    const atualizarCartao = async (id, atualizacoes) => {
        const novosCartoes = cartoes.map(cartao => cartao.id === id ? {
            ...cartao, atualizacoes
        } : cartao)
        setCartoes(novosCartoes)
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes))
    }

    const excluirCartao = async (id) => {
        const novosCartoes = cartoes.filter(cartao => cartao.id !== id)
        setCartoes(novosCartoes)
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes))
    }
    
    return(
        <CartoesEtudoContext.Provider value={{ cartoes, adicionarCartao, atualizarCartao, excluirCartao}}>
            { children }
        </CartoesEtudoContext.Provider>
    )

}

export default CartoesEtudoContext