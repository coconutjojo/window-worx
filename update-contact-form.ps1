$path = "c:\MAMP\htdocs\Window-Worx\contact.html"
$content = Get-Content $path -Raw

$oldForm = '<form name="contact" method="POST" data-netlify="true" class="contact-form">
            <input type="hidden" name="form-name" value="contact">
            <div class="form-group">
              <label for="name">Full Name <span style="color:var(--color-accent);">*</span></label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email">
            </div>
            <div class="form-group">
              <label for="phone">Phone <span style="color:var(--color-accent);">*</span></label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="city">Your City</label>
              <input type="text" id="city" name="city" placeholder="e.g. Waukee, West Des Moines...">
            </div>
            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" name="service">
                <option value="">Select a service...</option>
                <option value="residential">Residential Window Cleaning</option>
                <option value="interior-exterior">Interior & Exterior Cleaning</option>
                <option value="screen">Screen Cleaning / Repair</option>
                <option value="commercial">Mid-Rise Commercial</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Message / Details</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your home or any questions you have..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">Get Free Estimate [icon-arrow-up]</button>
          </form>'

$newForm = '<form name="contact" method="POST" data-netlify="true" class="contact-form">
            <input type="hidden" name="form-name" value="contact">
            <div class="form-group">
              <label for="name">Full Name <span style="color:var(--color-accent);">*</span></label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email <span style="color:var(--color-accent);">*</span></label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone <span style="color:var(--color-accent);">*</span></label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="street-address">Street Address <span style="color:var(--color-accent);">*</span></label>
              <input type="text" id="street-address" name="street-address" placeholder="e.g. 123 Main Street" required>
            </div>
            <div class="form-group">
              <label for="city">City <span style="color:var(--color-accent);">*</span></label>
              <input type="text" id="city" name="city" placeholder="e.g. Waukee, West Des Moines..." required>
            </div>
            <div class="form-group">
              <label for="zip">ZIP Code <span style="color:var(--color-accent);">*</span></label>
              <input type="text" id="zip" name="zip" maxlength="5" required>
            </div>
            <div class="form-group">
              <label for="service">Service Needed <span style="color:var(--color-accent);">*</span></label>
              <select id="service" name="service" required>
                <option value="">Select a service...</option>
                <option value="residential">Residential Window Cleaning</option>
                <option value="interior-exterior">Interior & Exterior Cleaning</option>
                <option value="screen">Screen Cleaning / Repair</option>
                <option value="commercial">Mid-Rise Commercial</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
            <div class="form-group">
              <label for="timeframe">Preferred Timeframe <span style="color:var(--color-accent);">*</span></label>
              <select id="timeframe" name="timeframe" required>
                <option value="">Select...</option>
                <option value="asap">ASAP - As soon as possible</option>
                <option value="this-week">This week</option>
                <option value="next-week">Next week</option>
                <option value="this-month">This month</option>
                <option value="next-month">Next month</option>
                <option value="flexible">Flexible / Not sure yet</option>
              </select>
            </div>
            <div class="form-group">
              <label for="message">Description of Needs / Questions</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your home, what services you'"'"'re interested in, any specific concerns, or questions you have..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;justify-content:center;">Get Free Estimate [icon-arrow-up]</button>
          </form>'

if ($content -contains $oldForm) {
    $content = $content.Replace($oldForm, $newForm)
    Set-Content -Path $path -Value $content -NoNewline
    Write-Host "contact.html updated successfully"
} else {
    Write-Host "ERROR: Could not find the old form in contact.html"
    $lineNum = $content.IndexOf("contact-form")
    if ($lineNum -ge 0) {
        Write-Host "Found 'contact-form' at position $lineNum"
    }
}
