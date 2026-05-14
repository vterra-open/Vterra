# Vterra Platform Roadmap

This document tracks capabilities planned for future development across the Vterra platform, including the Voxyn advisory agent, the live avatar interface, and the demo environments.

Items are organized by category. Status reflects current state: **Planned** means scoped but not yet in development. As work begins, status will move to **In Progress**, then **Complete**.

Community input is welcome via [GitHub Discussions](https://github.com/vterra-open/vterra/discussions).

---

## Language & Localization

### Manual language selection
**Status:** Planned

Allow visitors to select their preferred language before or during engagement with the Torvin demo agent and the Vterra expert agent (Ask Voxyn). The selected language governs both the agent's spoken output and any on-screen text.

**Scope:** All live avatar agents. UI language selector on the demo and Ask Voxyn pages. ElevenLabs language configuration per session.

---

### Automatic language detection
**Status:** Planned

Detect the visitor's language automatically from their first spoken input and switch the agent's response language to match — without requiring the visitor to select a language manually.

**Scope:** All live avatar agents. Requires ElevenLabs language detection capability or a pre-processing layer that identifies language before the agent responds.

---

## Conversation Experience

### Text input alternative to speech
**Status:** Planned

Provide a text prompt field for visitors who prefer not to interact through speech — whether due to environment, accessibility needs, or personal preference. The agent responds in the same advisory voice regardless of input method.

**Scope:** Both live avatar agents. Text input should be available as an optional toggle, not a replacement for the default voice interface.

---

### Real-time transcript with download option
**Status:** Planned

Display a visible, scrollable transcript of the conversation as it unfolds, and allow the visitor to download the full transcript at the end of the session. The transcript should capture both visitor input and agent responses with timestamps.

**Scope:** Both live avatar agents. Transcript panel should be collapsible so it does not compete with the avatar interface. Download format: PDF or plain text.

---

## Agent Intelligence

### Fuzzy recognition of trade names and technical terms
**Status:** Planned

Enable agents to recognize when a visitor uses a trade name or technical term that is phonetically close — but not identical — to the trained pronunciation. For example, a visitor who says "Vuh-TER-uh" instead of "vuh-TAIR-uh" should be understood correctly rather than triggering a misrecognition or an awkward clarification.

**Scope:** Both live avatar agents. This may be addressable through ElevenLabs pronunciation settings, a custom vocabulary layer, or a post-processing recognition step. Requires testing across the primary Vterra trade names: Vterra, Valorys, Voxyn, GSO.

---

## Platform Expansion

### Two additional demo use cases
**Status:** Planned

Develop two additional closed-context Voxyn demo instances, each pre-loaded with the full organizational profile of a fictional institution in a different sector. The goal is to let visitors from government, nonprofit, or other sectors see Voxyn operating in a context that maps more directly to their own organization.

**Scope:** Each new demo requires a complete fictional organizational profile (equivalent to the Torvin Insurance Group case study), a dedicated Voxyn agent instance in ElevenLabs, a live avatar deployment, and a demo page on vterra.ai.

**Candidate sectors:** Municipal government, nonprofit / NGO. Sector selection to be confirmed.

---

## Contributing

If you are building on the Vterra platform and want to contribute to any of these capabilities, open a discussion in [GitHub Discussions](https://github.com/vterra-open/vterra/discussions) or submit a pull request with a proposal document in `/roadmap/proposals/`.

For institutional inquiries, contact the Vterra team at [vterra.ai/contact](https://vterra.ai/contact). Serious institutional inquiries receive a response within 72 hours.

---

*Last updated: May 2026*
*Maintained by the Vterra core team*
