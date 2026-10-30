import { useState } from 'react';
import { toast } from 'sonner';
import type { DateRange } from '@/components/ui/calendar/calendar.types';

export function useExtraFieldsDemo() {
	const [period, setPeriod] = useState<DateRange>();
	const [time, setTime] = useState<string>();
	const [files, setFiles] = useState<File[]>([]);
	const [code, setCode] = useState('');
	const [results, setResults] = useState<string | null>(null);

	return {
		period,
		setPeriod,
		time,
		setTime,
		files,
		setFiles,
		code,
		setCode,
		results,
		onSearch: setResults,
		onCodeComplete: (value: string) =>
			toast.success('Código completo', { description: value }),
	};
}
