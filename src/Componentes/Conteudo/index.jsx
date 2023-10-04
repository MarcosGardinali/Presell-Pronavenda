import React from 'react'
import style from './conteudo.module.css'
import logo from '../../assets/images/logo.svg'
import Artigo from '../Artigo'
import ArtigoVendas from '../ArtigoVendas'
import Botao from '../Botao'

export default function Conteudo() {
    return (
        <main className={style.conteudo}>
            <section className={style.conteudo__container}>
                <img src={logo} alt='Logo' />
                <section>
                    <p className={style.conteudo__texto}>APLIQUE A METODOLOGIA DA ESCOLA <strong>PRONAVENDA E VENDA TODOS OS DIAS NA INTERNET!</strong></p>
                </section>
                <Artigo />
                <Botao/>
                <ArtigoVendas />
            </section>
        </main>
    )
}
