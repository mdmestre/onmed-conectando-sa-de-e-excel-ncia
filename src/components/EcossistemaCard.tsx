interface EcossistemaCardProps {
  name: string;
  description: string;
  logoUrl?: string;
  link?: string;
}

const EcossistemaCard = ({ name, description, logoUrl, link }: EcossistemaCardProps) => {
  const content = (
    <div className="border border-border rounded-lg p-6 bg-background hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-16 flex items-center mb-5">
        {logoUrl ? (
          <img src={logoUrl} alt={name} className="max-h-12 max-w-[160px] object-contain" />
        ) : (
          <div className="h-12 w-12 rounded bg-muted flex items-center justify-center">
            <span className="text-lg font-bold text-primary">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 className="text-sm font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default EcossistemaCard;
