# Contribuindo

Obrigado pelo interesse em contribuir com o FT Router!

## Reportando bugs

Abra uma [issue](../../issues/new/choose) com:
- a URL de origem e a URL em que você caiu (remova dados pessoais);
- o comportamento esperado;
- versão do Chrome e da extensão.

## Sugerindo mudanças

1. Faça um fork e crie um branch: `git checkout -b minha-mudanca`.
2. Carregue a pasta em `chrome://extensions` (Modo do desenvolvedor) e teste manualmente.
3. Garanta que os JSON são válidos (`python3 -m json.tool rules.json`) e que o JS passa em `node --check`.
4. Abra um Pull Request descrevendo o que mudou e por quê.

## Diretrizes

- Mantenha a extensão mínima: sem dependências, sem build, sem coleta de dados.
- Não adicione permissões além das necessárias; justifique qualquer nova permissão no PR.
- Prefira regras declarativas em `rules.json` a lógica em JS.
- Use mensagens de commit claras e no imperativo.

Ao contribuir, você concorda que seu código será licenciado sob a [MIT](LICENSE).
