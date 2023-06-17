import { InjectionToken } from '@viewfly/core'
import { Subject } from '@tanbo/stream'

export const ViewUpdateInjectionToken = new InjectionToken<Subject<HTMLElement>>('ViewUpdateInjectionToken')
