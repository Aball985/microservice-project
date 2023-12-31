# Use the official .NET SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build

WORKDIR /source
COPY . .

# Build the application
RUN dotnet publish -c Release -o /app

# Create a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS final
WORKDIR /app
COPY --from=build /app .

# Switch to a non-privileged user
USER $APP_UID

# Set the entry point
ENTRYPOINT ["dotnet", "FitService.dll"]
