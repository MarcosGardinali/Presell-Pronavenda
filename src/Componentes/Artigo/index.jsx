import React from 'react'
import style from './artigo.module.css'

export default function Artigo() {
    return (
        <main className={style.artigo}>
            <article className={style.conteudo__artigo}>
                <h1>E se você saísse do zero, e se tornasse um profissional em vendas?</h1>
                <p>A Escola Pronavenda é uma plataforma completa em vídeo aulas, onde você aprenderá mais de 3 maneiras de sair do zero e se tornar um profissional em vendas online</p>
                <p>Você receberá todo conhecimento necessário para sair do zero e viver da internet, recebendo aulas de diversos professores diferentes</p>
            </article>
        </main>
    )
}
