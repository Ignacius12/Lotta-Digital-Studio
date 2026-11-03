import type { Lang } from '../../i18n/langs'
import { ClinicAbout } from './components/ClinicAbout'
import { ClinicAppointment } from './components/ClinicAppointment'
import { ClinicFooter } from './components/ClinicFooter'
import { ClinicHeader } from './components/ClinicHeader'
import { ClinicHero } from './components/ClinicHero'
import { ClinicJsonLd } from './components/ClinicJsonLd'
import { ClinicLegal } from './components/ClinicLegal'
import { ClinicLocation } from './components/ClinicLocation'
import { ClinicTeam } from './components/ClinicTeam'
import { ClinicTreatments } from './components/ClinicTreatments'
import { ClinicTrust } from './components/ClinicTrust'
import { ClinicContext, getClinic } from './content'

export function ClinicApp({ lang }: { lang: Lang }) {
  const clinic = getClinic(lang)

  return (
    <ClinicContext.Provider value={clinic}>
      <div className="theme-clinic min-h-svh bg-clinic-ice text-clinic-ink">
        <ClinicJsonLd />
        <a href="#tratamientos" className="skip-link skip-link-clinic">
          {clinic.c.skip}
        </a>
        <ClinicHeader />
        <main>
          <ClinicHero />
          <ClinicTrust />
          <ClinicTreatments />
          <ClinicAbout />
          <ClinicTeam />
          <ClinicAppointment />
          <ClinicLocation />
          <ClinicLegal />
        </main>
        <ClinicFooter />
      </div>
    </ClinicContext.Provider>
  )
}
