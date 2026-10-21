import { redirect } from '@sveltejs/kit';

export function GET() {
 redirect(308, 'https://tatsudev.itch.io/diabolic');
}
