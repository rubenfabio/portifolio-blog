import React from 'react';
import Button from '../components/Buttons/Button';
import Container from '../components/container';
import Layout from '../components/Layout/Layout';

export default function blog() {
  return (
    <>
      <Layout
        title="blog"
        description="Prazer sou Ruben Fabio Gutierrez e este é meu blog"
      >
        <Container>
          <div className="md:w-6/12 w-full py-8 px-4">
            Conteudo
            <div>
              <Button href="/">Saiba Mais</Button>{' '}
            </div>
          </div>
          <div className="md:w-6/12 w-full py-8 px-4">Conteudo</div>
        </Container>
      </Layout>
    </>
  );
}
