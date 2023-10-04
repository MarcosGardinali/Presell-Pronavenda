import React from 'react'
import style from './artigoVendas.module.css'
import Botao from '../Botao'
import imagem1 from '../../assets/images/01.svg'
import imagem2 from '../../assets/images/02.svg'
import imagem3 from '../../assets/images/03.svg'

export default function ArtigoVendas() {
  return (
    <main className={style.conteudo__vendas}>
        <section className={style.conteudo__vendas__texto}>
            <p><strong>Você escolhe</strong> como chegará nesse faturamento, nós vamos te mostrar <strong>3 maneiras diferentes!</strong></p>
            <Botao/>
        </section>
        <section className={style.conteudo__vendas__tipos}>
            <ul className={style.conteudo__vendas__lista}>
                <li>
                    <img src={imagem1} className={style.conteudo__vendas__imagem} alt='1'/>
                    <section className={style.conteudo__vendas__tipos__textos}>
                        <h2>Vendas de produtos digitais</h2>
                        <p>Você receberá aulas sobre como vender com infoprodutos na internet, cursos e E-books, mesmo sem aparecer</p>
                    </section>
                </li>
                <li>
                    <img src={imagem2} className={style.conteudo__vendas__imagem} alt='2'/>
                    <section className={style.conteudo__vendas__tipos__textos}>
                        <h2>Vendas de produtos físicos</h2>
                        <p>Você receberá aulas sobre como vender muito com produtos físicos (mesmo sem ter estoque)</p>
                    </section>
                </li>
                <li>
                    <img src={imagem3} className={style.conteudo__vendas__imagem} alt='3'/>
                    <section className={style.conteudo__vendas__tipos__textos}>
                        <h2>Vendas de serviços na internet</h2>
                        <p>Você receberá aulas sobre como vender muito com serviços na internet, mesmo que você ainda não saiba o que e como vender</p>
                    </section>
                </li>
            </ul>
        </section>
    </main>
  )
}
