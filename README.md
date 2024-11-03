# Projeto de Teste de Performance com k6

Este projeto demonstra como realizar testes de carga com k6, focando em simular diferentes padrões de tráfego para uma API de registro de usuário.

## Configuração

Os testes são configurados para falhar se mais de 1% das requisições HTTP falharem ou se mais de 90% das requisições demorarem mais de 7 segundos para completar.

## Executando o Teste

Para executar o teste, siga os passos abaixo:

1. **Instalação do k6**:
   - Certifique-se de que o k6 está instalado em seu sistema. Se não estiver, você pode instalá-lo seguindo as instruções disponíveis em [k6.io](https://k6.io/docs/getting-started/installation).

2. **Preparação do Script**:
   - Salve o script acima como `k6_POC.js` em sua máquina.

3. **Abrir o Terminal**:
   - Abra o terminal e navegue até o diretório onde o arquivo `k6_POC.js` está salvo.

4. **Executar o Teste**:
   - Execute o teste com o comando:
     ```bash
     k6 run k6_POC.js
     ```

5. **Dashboard Web do k6**:
   - Para habilitar o dashboard web do k6 e visualizar os resultados em tempo real, use o comando:
     ```bash
     K6_WEB_DASHBOARD=true k6 run k6_POC.js
     ```
   - Acesse [http://localhost:5665/](http://localhost:5665/) no seu navegador para ver o dashboard.
