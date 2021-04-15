export const createActionSet = (name) => ({
    PENDING: `${name}_PENDING`,
    SUCCESS: `${name}_SUCCESS`,
    FAILED: `${name}_FAILED`,
})
