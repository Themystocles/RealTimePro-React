import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-100">Visão Geral Financeira</h1>
          <p className="text-xl text-gray-400 mt-4">Acompanhe a evolução dos índices financeiros e como suas finanças estão crescendo.</p>
        </div>

        {/* Cards de Índices: IBOV e IFIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {/* Card IBOV */}
          <div className="bg-gray-800 shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-200">Ibovespa (IBOV)</h2>
            <p className="text-4xl font-bold text-green-400 mt-4">118.560 pts</p>
            <p className="text-gray-400 mt-2">Índice de ações mais negociadas da Bolsa de Valores</p>
          </div>

          {/* Card IFIX */}
          <div className="bg-gray-800 shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-200">IFIX</h2>
            <p className="text-4xl font-bold text-blue-400 mt-4">2.650 pts</p>
            <p className="text-gray-400 mt-2">Índice dos fundos imobiliários da B3</p>
          </div>
        </div>

        {/* Notícias Iniciais */}
        <div className="bg-gray-800 shadow-xl rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-semibold text-gray-200 mb-4">Notícias Iniciais</h3>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacinia urna. Curabitur ut ante urna. 
            Fusce faucibus nulla sit amet venenatis lacinia. Mauris non libero ut nisi dapibus ultrices. Integer nec orci 
            eu turpis euismod venenatis non eget urna. Nunc at velit metus.
          </p>
        </div>

        {/* Gráfico do IBOV/IFIX */}
        <div className="bg-gray-800 shadow-xl rounded-xl p-8 mb-16">
          <h3 className="text-3xl font-semibold text-gray-200 mb-4">Gráfico IBOV/IFIX</h3>
          <div className="h-56 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            <p>Gráfico de evolução do IBOV (em breve)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
