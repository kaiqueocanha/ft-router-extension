# FT Router

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-green.svg)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Extensão do Chrome que redireciona automaticamente `www.ft.com` e `ft.com` para `app.ft.com`, preservando o resto da URL.

| Você abre                              | Você chega em                      |
| -------------------------------------- | ---------------------------------- |
| `https://www.ft.com/`                  | `https://app.ft.com/`              |
| `https://www.ft.com/world`             | `https://app.ft.com/world`         |
| `https://ft.com/content/abc?x=1#topo`  | `https://app.ft.com/content/abc?x=1#topo` |

## Recursos

- Redirect feito pelo navegador antes da página carregar, sem flash da página original.
- Preserva caminho, query string e fragmento.
- Só navegação de página (`main_frame`): imagens, scripts e APIs não são tocados.
- Popup com toggle on/off. O estado persiste e o badge do ícone mostra `ON`/`OFF`.
- Sem coleta de dados, sem rede, sem analytics.

## Instalação

A extensão ainda não está na Chrome Web Store. Para instalar a partir do código:

1. Clone o repositório:
   ```bash
   git clone https://github.com/kaiqueocanha/ft-router-extension.git
   ```
2. Abra `chrome://extensions` e ative o **Modo do desenvolvedor**.
3. Clique em **Carregar sem compactação** e selecione a pasta clonada.

Funciona também em navegadores baseados em Chromium (Edge, Brave etc.).

## Como funciona

A extensão usa a API [`declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) do Manifest V3, com uma regra estática em [`rules.json`](rules.json):

```json
{
  "regexFilter": "^(https?)://(?:www\\.)?ft\\.com/(.*)$",
  "regexSubstitution": "https://app.ft.com/\\2"
}
```

O service worker ([`background.js`](background.js)) apenas liga e desliga esse ruleset conforme o toggle do popup, e atualiza o badge.

## Estrutura

```
manifest.json   Configuração da extensão (MV3)
rules.json      Regra de redirecionamento
background.js   Service worker: toggle e badge
popup.html/js   Interface do toggle
```

## Permissões

| Permissão                  | Motivo                                          |
| -------------------------- | ----------------------------------------------- |
| `declarativeNetRequest`    | Aplicar a regra de redirect                     |
| `storage`                  | Guardar se o redirect está ligado ou desligado  |
| Hosts `ft.com`, `www.ft.com`, `app.ft.com` | Necessário para redirecionar entre eles |

## Limitações conhecidas

- Não verificamos se todos os caminhos do `www.ft.com` existem no `app.ft.com`. Se algum quebrar (login, conta etc.), [abra uma issue](../../issues) ou adicione uma exclusão em `rules.json`.

## Contribuindo

Contribuições são bem-vindas! Leia o [CONTRIBUTING.md](CONTRIBUTING.md) e o [Código de Conduta](CODE_OF_CONDUCT.md).

## Aviso

Projeto independente, sem afiliação com o Financial Times. "FT" e "Financial Times" pertencem aos seus respectivos donos.

## Licença

[MIT](LICENSE)
