const toggle = document.getElementById("toggle");
const state = document.getElementById("state");

function render(enabled) {
  toggle.checked = enabled;
  state.textContent = enabled ? "Ativado" : "Desativado";
}

chrome.storage.local.get("enabled").then(({ enabled = true }) => render(enabled));

toggle.addEventListener("change", () => {
  render(toggle.checked);
  chrome.storage.local.set({ enabled: toggle.checked });
});
