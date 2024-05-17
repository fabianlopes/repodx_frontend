function carregaImagem({ tecnica }) {
  const contextos = {
      'TEDXA-01': require.context('../imagens/repoDXpdf/TEDXA-01', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-02': require.context('../imagens/repoDXpdf/TEDXA-02', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-03': require.context('../imagens/repoDXpdf/TEDXA-03', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-04': require.context('../imagens/repoDXpdf/TEDXA-04', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-05': require.context('../imagens/repoDXpdf/TEDXA-05', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-06': require.context('../imagens/repoDXpdf/TEDXA-06', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-07': require.context('../imagens/repoDXpdf/TEDXA-07', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-08': require.context('../imagens/repoDXpdf/TEDXA-08', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-09': require.context('../imagens/repoDXpdf/TEDXA-09', true, /\.(PNG|jpe?g|svg)$/),
      'TEDXA-10': require.context('../imagens/repoDXpdf/TEDXA-10', true, /\.(PNG|jpe?g|svg)$/),
  };

  return contextos[tecnica] || null;
}

export default carregaImagem;
