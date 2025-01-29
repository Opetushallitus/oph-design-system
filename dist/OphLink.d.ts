import { LinkOwnProps, Theme } from '@mui/material';
import { SystemProps } from '@mui/system';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

type OmittedPropNames = keyof SystemProps<Theme> | 'paragraph' | 'TypographyClasses' | 'variantMapping' | 'align' | 'gutterBottom';
interface OphAdditionalLinkProps {
    /** Icon visibility override. If not given, icon visibility is deduced from href (relative links without icon) */
    iconVisible?: boolean;
}
interface OphLinkTypeMap<AdditionalProps = {}, RootComponent extends React.ElementType = 'a'> {
    props: AdditionalProps & Omit<LinkOwnProps, OmittedPropNames>;
    defaultComponent: RootComponent;
}
type MuiOphLinkProps<RootComponent extends React.ElementType = OphLinkTypeMap['defaultComponent'], AdditionalProps = {}> = OverrideProps<OphLinkTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
    component?: React.ElementType;
};
type OphLinkProps<C extends React.ElementType = React.ElementType, D extends React.ElementType = OphLinkTypeMap['defaultComponent']> = {
    component?: C;
} & Omit<MuiOphLinkProps<D, OphAdditionalLinkProps>, 'component'>;
declare const OphLink: OverridableComponent<OphLinkTypeMap<OphLinkProps>>;

export { OphLink, type OphLinkProps };
