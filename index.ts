import { element, by, waitFor } from 'detox';

export function getByRole(role: 'button', params: { name: string }) {
    return element(by.traits([role]).and(by.label(params.name)));
}

export async function findByTestId(testId: string) {
    return waitFor(element(by.id(testId))).toBeVisible().withTimeout(3000);
}

export function getByTestId(testId: string) {
    return element(by.id(testId))
}
