<template>
    <teleport to="body">
        <div v-if="show" @click="tryClose" class="backdrop"></div>
        <transition name="dialog">
            <dialog open v-if="show">
                <header>
                    <slot name="header">
                        <h2>{{ title }}</h2>
                    </slot>
                </header>
                <section>
                    <slot></slot>
                </section>
                <menu v-if="!fixed">
                    <slot name="actions">
                        <button class="dialog-button" @click="tryClose">Close</button>
                    </slot>
                </menu>
            </dialog>
        </transition>
    </teleport>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
        fixed: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ['close'],
    methods: {
        tryClose() {
            if (this.fixed) {
                return;
            }
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
    backdrop-filter: blur(5px);
}

dialog {
    position: fixed;
    top: 20vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: white;
}

header {
    background-color: #3a0061;
    color: white;
    width: 100%;
    padding: 1rem;
}

header h2 {
    margin: 0;
}

section {
    padding: 1rem;
}

menu {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    margin: 0;
}

@media (min-width: 768px) {
    dialog {
        left: calc(50% - 20rem);
        width: 40rem;
    }
}

.dialog-enter-from,
.dialog-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

.dialog-enter-active {
    transition: all 0.3s ease-out;
}

.dialog-leave-active {
    transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
    opacity: 1;
    transform: scale(1);
}

/* Style for the dialog's action buttons (Close) - use project purple theme (#3a0061) */
/* Style for dialog action button via class so hover/focus can be applied separately */
.dialog-button {
    /* transparent button with theme-colored text and invisible border by default */
    background: transparent;
    color: #3a0061; /* theme purple */
    border: 1px solid transparent;
    padding: 0.5rem 0.9rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none;
    transition: color 0.12s ease, border-color 0.12s ease, transform 0.06s ease;
}

/* Hover: show a purple border (no background change) */
.dialog-button:hover {
    border-color: #3a0061;
}

.dialog-button:active {
    transform: translateY(1px);
}

.dialog-button:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(58,0,97,0.12); /* purple focus ring */
}

/* Subtle/ghost variant (keeps using purple tones), use as <button class="dialog-button ghost"> */
.dialog-button.ghost {
    background: transparent;
    color: #3a0061;
    border: 1px solid rgba(58,0,97,0.08);
}
</style>