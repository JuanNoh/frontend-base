import type { VerticalId } from '../../types/vertical.types';
import { ADMINISTRACION } from './administracion';
import { CITAS } from './citas';
import { LOGISTICA } from './logistica';
import { POS } from './pos';
import { RH } from './rh';

export const VERTICALS = {
	administracion: ADMINISTRACION,
	pos: POS,
	rh: RH,
	citas: CITAS,
	logistica: LOGISTICA,
} satisfies Record<VerticalId, unknown>;

export const VERTICAL_OPTIONS = Object.values(VERTICALS).map((vertical) => ({
	value: vertical.id,
	label: vertical.label,
}));
