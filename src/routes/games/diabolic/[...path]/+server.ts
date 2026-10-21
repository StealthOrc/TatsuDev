import { redirect } from '@sveltejs/kit';

// Retire old playable files as well as the main game page.
export function GET() {
 redirect(308, 'https://tatsudev.itch.io/diabolic');
}
