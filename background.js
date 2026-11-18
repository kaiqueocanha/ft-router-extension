const RULESET_ID = "ft_redirect";

async function apply(enabled) {
  await chrome.declarativeNetRequest.updateEnabledRulesets(
    enabled
      ? { enableRulesetIds: [RULESET_ID] }
      : { disableRulesetIds: [RULESET_ID] }
  );
  await chrome.action.setBadgeText({ text: enabled ? "ON" : "OFF" });
  await chrome.action.setBadgeBackgroundColor({
    color: enabled ? "#2e7d32" : "#757575",
  });
}

async function sync() {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  await apply(enabled);
}

chrome.runtime.onInstalled.addListener(async () => {
  const { enabled } = await chrome.storage.local.get("enabled");
  if (enabled === undefined) await chrome.storage.local.set({ enabled: true });
  await sync();
});

chrome.runtime.onStartup.addListener(sync);

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) apply(changes.enabled.newValue !== false);
});
