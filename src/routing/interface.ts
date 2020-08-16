import {Handler} from '../interface';

export interface HTTPListener {
	pathname: string;
	handlers: Handler[];
}

export interface Routes {
	[method: string]: HTTPListener[];
}

