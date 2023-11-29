document.addEventListener('DOMContentLoaded', function() {
    const carrinhoElement = document.querySelector('.carrinho');
    const totalElement = document.querySelector('.total-compra');

    let totalCompra = 0;

    // Função para adicionar um livro ao carrinho
    function adicionarLivroAoCarrinho(livro, preco) {
        // Obtém o título do livro
        const titulo = livro.querySelector('p:nth-of-type(1)').innerText;

        // Verifica se o item já existe no carrinho
        const itemExistente = Array.from(carrinhoElement.children).find(item => {
            return item.dataset.titulo === titulo;
        });

        if (itemExistente) {
            // Se o item já existe, atualiza a quantidade e a exibe no carrinho
            const quantidadeAtual = parseInt(itemExistente.dataset.quantidade) || 1;
            itemExistente.dataset.quantidade = quantidadeAtual + 1;
            const spanQuantidade = itemExistente.querySelector('.quantidade');
            spanQuantidade.innerText = `Quantidade: ${quantidadeAtual + 1}`;
        } else {
            // Se o item não existe, cria um novo item no carrinho
            const novoItem = document.createElement('li');
            novoItem.dataset.titulo = titulo;
            novoItem.dataset.quantidade = 1;
            novoItem.innerHTML = `
                <span>${titulo} - R$ ${preco.toFixed(2)}</span>
                <span class="quantidade">Quantidade: 1</span>
                <button class="remover-item">X</button>
            `;
            carrinhoElement.appendChild(novoItem);

            // Adiciona um evento para remover o item do carrinho
            novoItem.querySelector('.remover-item').addEventListener('click', function() {
                let quantidadeAtual = parseInt(novoItem.dataset.quantidade) || 0;

                if (quantidadeAtual > 1) {
                    quantidadeAtual--;
                    novoItem.dataset.quantidade = quantidadeAtual;
                    const spanQuantidade = novoItem.querySelector('.quantidade');
                    spanQuantidade.innerText = `Quantidade: ${quantidadeAtual}`;
                } else {
                    carrinhoElement.removeChild(novoItem);
                }
                // Atualiza o total ao remover o item
                atualizarTotal(preco * -1);
            });
        }

        // Atualiza o total ao adicionar o item
        atualizarTotal(preco);

        // Exibe o carrinho ao adicionar um item
        carrinhoElement.classList.add('carrinho-visivel');

        // Verifica se o botão de fechar já existe
        const fecharCarrinhoBtn = carrinhoElement.querySelector('.fechar-carrinho');
        if (!fecharCarrinhoBtn) {
            // Adiciona o botão de fechar somente se não existir
            const fecharCarrinhoBtn = document.createElement('button');
            fecharCarrinhoBtn.innerText = 'Fechar Carrinho';
            fecharCarrinhoBtn.classList.add('fechar-carrinho');
            carrinhoElement.appendChild(fecharCarrinhoBtn);

            // Adiciona um evento para ocultar o carrinho ao clicar no botão "Fechar Carrinho"
            fecharCarrinhoBtn.addEventListener('click', function() {
                carrinhoElement.classList.remove('carrinho-visivel');
                carrinhoElement.removeChild(fecharCarrinhoBtn);
            });
        }

        // Verifica se o botão de finalizar compras já existe
        const finalizarComprasBtn = carrinhoElement.querySelector('.finalizar-compras');
        if (!finalizarComprasBtn) {
            // Adiciona o botão de finalizar compras somente se não existir
            const finalizarComprasBtn = document.createElement('button');
            finalizarComprasBtn.innerText = 'Finalizar Compras';
            finalizarComprasBtn.classList.add('finalizar-compras');
            carrinhoElement.appendChild(finalizarComprasBtn);

            // Adiciona um evento para finalizar a compra ao clicar no botão "Finalizar Compras"
            finalizarComprasBtn.addEventListener('click', function() {
                alert('Compra finalizada! Obrigado por comprar conosco.');
                carrinhoElement.classList.remove('carrinho-visivel');
                carrinhoElement.removeChild(finalizarComprasBtn);
            });
        }
    }

    // Função para atualizar o total da compra
    function atualizarTotal(valor) {
        totalCompra += valor;
        totalElement.innerText = `Total: R$ ${totalCompra.toFixed(2)}`;
    }

    // Adiciona um event listener para cada botão "Adicionar ao Carrinho"
    const adicionarAoCarrinhoButtons = document.querySelectorAll('.adicionar-carrinho');
    adicionarAoCarrinhoButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Obtém o livro associado ao botão "Adicionar ao Carrinho" clicado
            const livro = event.target.closest('.caixa');
            const precoTexto = livro.querySelector('#preco').innerText;
            const preco = parseFloat(precoTexto.replace('R$ ', ''));
            adicionarLivroAoCarrinho(livro, preco);
        });
    });

    // Adiciona um event listener para o botão "Mostrar Carrinho"
    const botaoMostrarCarrinho = document.querySelector('.bntMostrarCarrinho');
    botaoMostrarCarrinho.addEventListener('click', function() {
        carrinhoElement.classList.add('carrinho-visivel');

        // Verifica se o botão de fechar já existe
        const fecharCarrinhoBtn = carrinhoElement.querySelector('.fechar-carrinho');
        if (!fecharCarrinhoBtn) {
            // Adiciona o botão de fechar somente se não existir
            const fecharCarrinhoBtn = document.createElement('button');
            fecharCarrinhoBtn.innerText = 'Fechar Carrinho';
            fecharCarrinhoBtn.classList.add('fechar-carrinho');
            carrinhoElement.appendChild(fecharCarrinhoBtn);

            // Adiciona um evento para ocultar o carrinho ao clicar no botão "Fechar Carrinho"
            fecharCarrinhoBtn.addEventListener('click', function() {
                carrinhoElement.classList.remove('carrinho-visivel');
                carrinhoElement.removeChild(fecharCarrinhoBtn);
            });
        }

        // Verifica se o botão de finalizar compras já existe
        const finalizarComprasBtn = carrinhoElement.querySelector('.finalizar-compras');
        if (!finalizarComprasBtn) {
            // Adiciona o botão de finalizar compras somente se não existir
            const finalizarComprasBtn = document.createElement('button');
            finalizarComprasBtn.innerText = 'Finalizar Compras';
            finalizarComprasBtn.classList.add('finalizar-compras');
            carrinhoElement.appendChild(finalizarComprasBtn);

            // Adiciona um evento para finalizar a compra ao clicar no botão "Finalizar Compras"
            finalizarComprasBtn.addEventListener('click', function() {
                alert('Compra finalizada! Obrigado por comprar conosco.');
                carrinhoElement.classList.remove('carrinho-visivel');
                carrinhoElement.removeChild(finalizarComprasBtn);
            });
        }
    });
});
