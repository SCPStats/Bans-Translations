import EN from "./langs/en";

export interface Translation {
    loading: string;
    redirecting: string;
    success: string;
    error: string;
    errorOccurred: string;
    servers: string;
    warnings: string;
    createWarning: string;
    ipBans: string;
    createIPBan: string;
    bans: string;
    createBan: string;
    playerTitle: string;
    issuerTitle: string;
    idVal: string;
    issuerVal: string;
    playerVal: string;
    reasonVal: string;
    issuedVal: string;
    expiresVal: string;
    serverConsole: string;
    unknown: string;
    unpardon: string;
    unpardonSuccess: string;
    pardon: string;
    pardonSuccess: string;
    delete: string;
    deleteSuccess: string;
    confirmMessage: string;
    confirm: string;
    cancel: string;
    invalidIP: string;
    invalidIPDesc: string;
    invalidID: string;
    invalidIDDesc: string;
    invalidDuration: string;
    invalidDurationDesc: string;
    createBanSuccess: string;
    createWarningSuccess: string;
    ip: string;
    ipHint: string;
    id: string;
    idHint: string;
    duration: string;
    durationHint: string;
    reason: string;
    reasonHint: string;
    submit: string;
    edit: string;
    editBan: string;
    editBanSuccess: string;
    editWarning: string;
    editWarningSuccess: string;
    profile: string;
    language: string;
    logout: string;
    searchHint: string;
    playtime: string;
    lastSeen: string;
}

export const Translations: Record<string, Translation> = {
    "en": EN
};