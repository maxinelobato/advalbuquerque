'use client';

import { Suspense } from 'react';
import { AulasBonus } from './components/aulasbonus';
import { DuvidasFrequentes } from './components/duvidasfrequentes';
import { EmentaCurso } from './components/ementacurso';
import { GarantiaDeSeguranca } from './components/garantiadeseguranca';
import { PaginaInicial } from './components/paginainicial';
import { PrecoInvestimento } from './components/precoinvestimento';
import { ProvaSocialAlunos } from './components/provasocialalunos';
import { RodapePagina } from './components/rodapepagina';
import { SobreEspecialista } from './components/sobreespecialista';
import { SobreOCurso } from './components/sobreocurso';

export default function Home() {
  return (
    <>
    <Suspense>
      <PaginaInicial />
      <SobreOCurso />
      <EmentaCurso />
      <AulasBonus />
      <GarantiaDeSeguranca />
      <PrecoInvestimento />
      <SobreEspecialista />
      <ProvaSocialAlunos />
      <DuvidasFrequentes />
      <RodapePagina />
      </Suspense>
    </>
  );
}
